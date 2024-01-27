const lancamentos = [
    { Name: "Colar Olho Grego", Price: "259.00", Image: "Imagens/acessorios/colarolhogrego.png", Estoque: 7,},
    { Name: "Relogio Festina", Price: "715.00", Image: "Imagens/acessorios/relogiofestina.png", Estoque: 1,},
    { Name: "Moletom Berseker", Price: "229.00", Image: "Imagens/moletom/moletomberseker.png", Estoque: 3,},
    { Name: "Calça Berserk", Price: "89.00", Image: "Imagens/calca/calcaberserk.png", Estoque: 3,},
    { Name: "Calça Livina", Price: "159.00", Image: "Imagens/calca/calcalivina.png", Estoque: 3,},
    { Name: "Bone Classico Branco", Price: "49.90", Image: "Imagens/acessorios/bonebranco.png", Estoque: 3,},
];
const acessorios = [
    { Name: "Bone Branco Mesh", Price: "25.00", Image: "Imagens/acessorios/bonebranco.png", Estoque: 4,},
    { Name: "Pulseira De Prata", Price: "225.00", Image: "Imagens/acessorios/pulseiraprata.png", Estoque: 3,},
    { Name: "Colar Gato na Lua", Price: "169.00", Image: "Imagens/acessorios/colarlua.png", Estoque: 2,},
    { Name: "Pulseira Masculina", Price: "145.00", Image: "Imagens/acessorios/pulseiramasculina.png", Estoque: 5,},
    { Name: "Colar Olho Grego", Price: "259.00", Image: "Imagens/acessorios/colarolhogrego.png", Estoque: 7,},
    { Name: "Bone New Era Marrom", Price: "145.00", Image: "Imagens/acessorios/boneneweramarom.png", Estoque: 5,},
    { Name: "Bone Liso Preto", Price: "35.00", Image: "Imagens/acessorios/bonepretoliso.png", Estoque: 3,},
    { Name: "Relogio Festina", Price: "715.00", Image: "Imagens/acessorios/relogiofestina.png", Estoque: 1,},
    { Name: "Óculos Ray Ban", Price: "200.00", Image: "Imagens/acessorios/rayban.png", Estoque: 10,},
];
const moletom = [
    { Name: "Moletom Berseker", Price: "229.00", Image: "Imagens/moletom/moletomberseker.png", Estoque: 3,},
    { Name: "Moletom Preto", Price: "99.00", Image: "Imagens/moletom/moletompreto.png", Estoque: 10,},
    { Name: "Moletom Azul Une", Price: "129.00", Image: "Imagens/moletom/moletomuneazul.png", Estoque: 4,},
    { Name: "Moletom Branco Birden", Price: "229.00", Image: "Imagens/moletom/moletombrancobirden.png", Estoque: 3,},
    { Name: "Moletom Cinza", Price: "99.00", Image: "Imagens/moletom/moletomcinza.png", Estoque: 3,},
    { Name: "Moletom Hello Kitty", Price: "329.00", Image: "Imagens/moletom/moletomhellokitty.png", Estoque: 3,},
    { Name: "Moletom Rosa", Price: "99.00", Image: "Imagens/moletom/moletomrosa.png", Estoque: 3,},
    { Name: "Moletom Militar USA", Price: "229.00", Image: "Imagens/moletom/moletommilitar.png", Estoque: 3,},
    { Name: "Moletom Real Madrid", Price: "449.00", Image: "Imagens/moletom/moletomralmadrird.png", Estoque: 3,},
];
const calca = [
    { Name: "Calça Brim", Price: "119.00", Image: "Imagens/calca/calcabrim.png", Estoque: 1,},
    { Name: "Calça Livina", Price: "159.00", Image: "Imagens/calca/calcalivina.png", Estoque: 3,},
    { Name: "Calça Cargo Feminina", Price: "165.00", Image: "Imagens/calca/calcacargofeminina.png", Estoque: 2,},
    { Name: "Calça Berserk", Price: "89.00", Image: "Imagens/calca/calcaberserk.png", Estoque: 3,},
    { Name: "Calça Jeans", Price: "109.00", Image: "Imagens/calca/calcajeans.png", Estoque: 5,},
    { Name: "Calça Real Madrid", Price: "229.00", Image: "Imagens/calca/calcarealmadrid.png", Estoque: 4,},
    { Name: "Calça Ipermeavel", Price: "145.00", Image: "Imagens/calca/calcaipermeavel.png", Estoque: 6,},
    { Name: "Calça Militar", Price: "119.00", Image: "Imagens/calca/calcamilitar.png", Estoque: 3,},
    { Name: "Calça Cargo", Price: "165.00", Image: "Imagens/calca/calcacargo.png", Estoque: 4,},
];
const camisas = [
    { Name: "Camisa Polo Direito", Price: "49.00", Image: "Imagens/camisas/camisapolodireito.png", Estoque: 4,},
    { Name: "Camisa Preta", Price: "30.00", Image: "Imagens/camisas/camisapreta.png", Estoque: 2,},
    { Name: "Camisa Polo", Price: "69.00", Image: "Imagens/camisas/camisapolo.png", Estoque: 1,},
    { Name: "Camisa Inglaterra", Price: "220.00", Image: "Imagens/camisas/camisainglaterra2223.png", Estoque: 5,},
    { Name: "Camisa Tribal", Price: "49.00", Image: "Imagens/camisas/camisetatribal.png", Estoque: 3,},
    { Name: "Camisa Cruzeiro", Price: "229.00", Image: "Imagens/camisas/camisetacruzeiro.png", Estoque: 5,},
    { Name: "Camisa Corinthians", Price: "229.00", Image: "Imagens/camisas/camisacorinthians.png", Estoque: 5,},
    { Name: "Camisa Palmeiras", Price: "229.00", Image: "Imagens/camisas/camisapalmeiras.png", Estoque: 5,},
    { Name: "Camisa São Paulo", Price: "229.00", Image: "Imagens/camisas/camisasaopaulo.png", Estoque: 5,},
];
const bermudas = [
    { Name: "Bermuda Tactel", Price: "39.00", Image: "Imagens/bermudas/bermudatactel.png", Estoque: 4,},
    { Name: "Bermuda Cargo", Price: "59.00", Image: "Imagens/bermudas/bermudacargo.png", Estoque: 2,},
    { Name: "Bermuda High", Price: "99.00", Image: "Imagens/bermudas/bermudahigh .png", Estoque: 2,},
    { Name: "Bermuda Preta", Price: "39.00", Image: "Imagens/bermudas/bermudapreta.png", Estoque: 5,},
    { Name: "Bermuda Azul Marinho", Price: "29.00", Image: "Imagens/bermudas/bermudaazulmarinho.png", Estoque: 3,},
    { Name: "Bermuda Inglaterra", Price: "69.00", Image: "Imagens/bermudas/bermuinglaterra.png", Estoque: 3,},
    { Name: "Bermuda Corinthians", Price: "69.00", Image: "Imagens/bermudas/bermudacorinthians.png", Estoque: 3,},
    { Name: "Bermuda Palmeiras", Price: "69.00", Image: "Imagens/bermudas/bermudapalmeiras.png", Estoque: 3,},
    { Name: "Bermuda São Paulo", Price: "69.00", Image: "Imagens/bermudas/bermudasaopaulo.png", Estoque: 3,},

];

const xitemoncart = [];
