import { MenuItem, MenuCategory, SpecialtyItem } from '../types';

/**
 * Parseur CSV léger et sans dépendance externe
 */
function parseCSV(text: string): string[][] {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  return lines.map((line) => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"' || char === "'") {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  });
}

export async function fetchMenuFromGoogleSheet(csvUrl: string): Promise<{
  menu: MenuItem[];
  specialties: SpecialtyItem[];
} | null> {
  if (!csvUrl) return null;

  try {
    const response = await fetch(csvUrl, { cache: 'no-cache' });
    if (!response.ok) {
      console.warn('Impossible de charger le Google Sheet (statut:', response.status, ')');
      return null;
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);
    if (rows.length < 2) return null;

    // Normalisation des en-têtes (minuscules sans accents)
    const headers = rows[0].map((h) =>
      h.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
    );

    const catIdx = headers.findIndex((h) => h.includes('cat'));
    const nameIdx = headers.findIndex((h) => h.includes('nom') || h.includes('name'));
    const priceIdx = headers.findIndex((h) => h.includes('prec') || h.includes('price'));
    const descIdx = headers.findIndex((h) => h.includes('desc'));
    const badgeIdx = headers.findIndex((h) => h.includes('etiq') || h.includes('badge'));
    const favIdx = headers.findIndex((h) => h.includes('fav') || h.includes('pop'));
    const specIdx = headers.findIndex((h) => h.includes('spec') || h.includes('espec'));

    if (nameIdx === -1 || catIdx === -1) {
      console.warn('En-têtes manquants dans le Google Sheet (categoria et nombre requis)');
      return null;
    }

    const menu: MenuItem[] = [];
    const specialties: SpecialtyItem[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const name = row[nameIdx] || '';
      if (!name) continue;

      let catRaw = (row[catIdx] || '').toLowerCase().trim();
      let category: MenuCategory = 'caliente';
      if (catRaw.includes('fria') || catRaw.includes('frio') || catRaw.includes('cold')) category = 'fria';
      else if (catRaw.includes('frap')) category = 'frappe';
      else if (catRaw.includes('com') || catRaw.includes('pan') || catRaw.includes('food')) category = 'comer';

      let price = (row[priceIdx] || '').trim();
      if (price && !price.startsWith('$')) price = `$${price}`;

      const desc = descIdx !== -1 ? row[descIdx] || '' : '';
      const badge = badgeIdx !== -1 ? row[badgeIdx] || undefined : undefined;
      const favRaw = favIdx !== -1 ? (row[favIdx] || '').toLowerCase().trim() : '';
      const popular = favRaw === 'si' || favRaw === 'true' || favRaw === '1' || favRaw === 'yes';

      const specRaw = specIdx !== -1 ? (row[specIdx] || '').toLowerCase().trim() : '';
      const isSpecialty = specRaw === 'si' || specRaw === 'true' || specRaw === '1' || specRaw === 'yes';

      menu.push({
        id: `item-${i}-${name.toLowerCase().replace(/\s+/g, '-')}`,
        name,
        category,
        description: desc,
        price,
        badge: badge || undefined,
        popular
      });

      if (isSpecialty) {
        specialties.push({
          name,
          tag: badge || 'Especialidad',
          desc,
          price
        });
      }
    }

    return { menu, specialties };
  } catch (error) {
    console.error('Erreur lors de la lecture du Google Sheet:', error);
    return null;
  }
}
