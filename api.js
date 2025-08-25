// Substitua pelo ID da sua planilha
const SPREADSHEET_ID = "10pOvl8cvPmXxR9a8McSnXF2xPiGdBKxm14c3mYaXi4I";

// Função para buscar todos os membros da planilha publicada
async function buscarMembros() {
    try {
        const url = `https://spreadsheets.google.com/feeds/list/${SPREADSHEET_ID}/od6/public/values?alt=json`;
        const res = await fetch(url);
        if(!res.ok) throw new Error("Erro ao acessar a planilha");
        const data = await res.json();

        // Mapear os dados da planilha
        const membros = data.feed.entry.map(item => ({
            nome: item.gsx$nome.$t || "",
            email: item.gsx$email.$t || "",
            cargo: item.gsx$cargo.$t || "",
            foto: item.gsx$foto.$t || ""
        }));
        return membros;

    } catch (error) {
        console.error("Erro ao buscar membros:", error);
        return [];
    }
}
