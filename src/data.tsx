import { type CardProductItemProps } from "./components/CardProductItem.vue";

const data : CardProductItemProps[][] = [
    [ // bolacha
        {
        img: "bolacha_de_leite.png",
        name: "Bolacha de Leite",
        description: "farinha de trigo, leite, açúcar, manteiga e bicarbonato de sódio."
        },
        {
            img: "bolacha_preta.png",
            name: "Bolacha Preta",
            description: "farinha de trigo, rapadura, margarina, bicarbonato de soda e erva-doce."
        },
        {
            img: "bolacha_mista.png",
            name: "Bolacha Mista",
            description: "farinha de trigo, rapadura, leite, açúcar, manteiga e bicarbonato de sódio e erva-doce."
        },
        {
            img: "bolacha_palito.png",
            name: "Biscoito Palito",
            description: "farinha de trigo, leite, açúcar, manteiga e bicarbonato de sódio."
        }
    ],
    [ // doces
        {
            img: "doce_leite_com_goiabada.png",
            name: "Leite com Goiabada",
            description: "leite, açúcar, goiabada, bicarbonato de sódio, sorbato de potássio e amido de milho."
        },
        {
            img: "doce_especie.png",
            name: "Espécie",
            description: "leite, açúcar, rapadura, margarina, bicarbonato de soda e erva-doce."
        },
        {
            img: "doce_leite_com_ameixa.png",
            name: "Leite com Ameixa",
            description: "leite, ameixa, açúcar e bicarbonato de sódio."
        },
        {
            img: "doce_leite_cremoso.png",
            name: "Leite Cremoso",
            description: "leite de vaca fresco, açúcar cristal e sorbato de potássio."
        }
    ],
    [ // rapaduras
        {
            img: "rapadura_castanha.png",
            name: "Castanha",
            description: "leite, açúcar, cravo, erva doce, castanha de caju e conservante."
        },
        {
            img: "rapadura_leite.png",
            name: "Leite",
            description: "leite fresco, açúcar cristal e sorbato de potássio."
        },
        {
            img: "rapadura_coco.png",
            name: "Coco",
            description: "coco, açúcar e bircabonato de sódio."
        }
    ]
]
export default data
