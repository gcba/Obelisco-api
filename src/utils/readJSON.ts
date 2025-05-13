import { promises as fs } from 'fs';
import path from 'path';

/**
 * Lee un archivo JSON y lo convierte en un objeto de JavaScript.
 * @param relativePath Ruta relativa al archivo JSON desde la raíz del proyecto (por ejemplo: 'data/config.json')
 * @returns Contenido parseado como objeto
 * @throws Si el archivo no existe o el contenido no es JSON válido
 */
export default async function readJson<T = any>(
  relativePath: string
): Promise<T> {
  try {
    const absolutePath = path.resolve(__dirname, '../../', relativePath);
    const data = await fs.readFile(absolutePath, 'utf-8');
    return JSON.parse(data) as T;
  } catch (err) {
    console.error(`Error leyendo JSON desde ${relativePath}:`, err);
    throw err;
  }
}
