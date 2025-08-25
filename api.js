// Substitua pelo ID da sua planilha publicada
const SPREADSHEET_ID = "1B8_97S4WuXUMfaeGcrVDNnABc87hCD_UQEDU135Q3i8";

async function buscarMembros() {
    try {
        const url = `https://spreadsheets.google.com/feeds/list/${SPREADSHEET_ID}/od6/public/values?alt=json`;
        const res = await fetch(url);
        if(!res.ok) throw new Error("Erro ao acessar a planilha");
        const data = await res.json();

        // Mapear apenas as colunas que interessam: Nome, Email, Cargo, Foto
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
