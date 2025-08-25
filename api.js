const SPREADSHEET_ID = "1SD8iQuFVLKDgy9YZS6rsQNpUb39v8sGkkmOWengNpSg";
const SHEET_NAME = "Membros";

// Buscar todos os membros
async function buscarMembros() {
    const url = `https://spreadsheets.google.com/feeds/list/${SPREADSHEET_ID}/od6/public/values?alt=json`;
    const res = await fetch(url);
    const data = await res.json();
    // Mapear os dados
    const membros = data.feed.entry.map(item => ({
        nome: item.gsx$nome.$t,
        email: item.gsx$email.$t,
        cargo: item.gsx$cargo.$t,
        foto: item.gsx$foto.$t
    }));
    return membros;
}
