import { ItemType, SortingCriteriaType } from "./types/types";

export const ITEMS_API = "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json"
export const ITEM_FILTER_PARAMS = [
    'title' as keyof SortingCriteriaType,
    'description' as keyof SortingCriteriaType,
    'price' as keyof SortingCriteriaType,
    'email' as keyof SortingCriteriaType];

export const TESTING_ARRAY_OF_ITEMS: ItemType[] = [
    {
        title: "iPhone 6S Oro",
        description: "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
        price: "740",
        email: "iphonemail@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png",
        isFav: true,
        isInSearchQuery: true,
        isInFavSearchQuery: true
    },
    {
        title: "Polaroid 635",
        description: "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
        price: "50",
        email: "cameramail@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png",
        isFav: true,
        isInSearchQuery: true,
        isInFavSearchQuery: true
    },
    {
        title: "Bolso piel marca Hoss",
        description: "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
        price: "250",
        email: "bagmail@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png",
        isFav: true,
        isInSearchQuery: false,
        isInFavSearchQuery: false
    },
    {
        title: "Reloj de Daniel Wellington",
        description: "Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ",
        price: "100",
        email: "watchmail@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png",
        isFav: false,
        isInSearchQuery: false,
        isInFavSearchQuery: false
    },
    {
        title: "Coche antiguo americano",
        description: "Coche antiguo americano de color marrón. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas",
        price: "210000",
        email: "carmail@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png",
        isFav: false,
        isInSearchQuery: false,
        isInFavSearchQuery: false
    },
    {
        title: "Barbacoa",
        description: "Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones",
        price: "120",
        email: "barbecue@wallapop.com",
        image: "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png",
        isFav: true,
        isInSearchQuery: true,
        isInFavSearchQuery: false
    }
]