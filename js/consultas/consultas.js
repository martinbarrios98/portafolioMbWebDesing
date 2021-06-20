export async function obtenerPaginas(){

    const req = await fetch('../../json/paginas.json');
    const res = await req.json();

    return res.paginas;

}