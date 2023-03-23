export interface ICard {
  key?: string,
  id: string,
  title: string,
  compound: string,
  price: string,
  stock: number,
  photo: string,
}

export interface ICardForm {
  currentName: string,
  currentDate: string,
  currentCountry: string,
  currentAgreement: boolean,
  currentMale: boolean,
  currentFemale: boolean,
  currentPhoto: any,
}


export const data: { cards: ICard[]; } = {
  cards:
    [
      {
        id: "1",
        title: "Bouquet `Flowering garden`",
        compound: "Chrysanthemum, bush rose, limonium, alstroemeria, pistachio, assorted packaging",
        price: "10$",
        stock: 24,
        photo: "https://podarok.by/upload/resize_cache/iblock/2ea/450_450_140cd750bba9870f18aada2478b24840a/2ea9cbe3255a7568284c432302962a91.jpeg",
      },
      {
        id: "2",
        title: "Bouquet `Tenderness`",
        compound: "50 Artisanal pink roses",
        price: "20$",
        stock: 2,
        photo: "https://klike.net/uploads/posts/2019-12/1575708847_1.jpg",
      },
      {
        id: "3",
        title: "Bouquet `March 8`",
        compound: "15 tulips",
        price: "12$",
        stock: 335,
        photo: "https://klike.net/uploads/posts/2019-12/1575708972_4.jpg",
      },
      {
        id: "4",
        title: "Bouquet `Mom's love`",
        compound: "7 tulips",
        price: "6$",
        stock: 14,
        photo: "https://klike.net/uploads/posts/2019-12/1575709047_5.jpg",
      },
      {
        id: "5",
        title: "Bouquet `She will be yours`",
        compound: "101 roses",
        price: "60$",
        stock: 9,
        photo: "https://klike.net/uploads/posts/2019-12/1575709048_8.jpg",
      },
      {
        id: "6",
        title: "Bouquet `For all occasions`",
        compound: "The bouquet is assembled from 15 branches of flowers at your discretion",
        price: "45$",
        stock: 72,
        photo: "https://klike.net/uploads/posts/2019-12/1575708995_16.jpg",
      },
      {
        id: "7",
        title: "Bouquet `Simple and clear`",
        compound: "25 roses",
        price: "12$",
        stock: 335,
        photo: "https://klike.net/uploads/posts/2019-12/1575709008_13.jpg",
      },
      {
        id: "8",
        title: "Bouquet `For wife`",
        compound: "121 roses",
        price: "120$",
        stock: 4,
        photo: "https://klike.net/uploads/posts/2019-12/1575708989_17.jpg",
      },
      {
        id: "9",
        title: "Bouquet `Rainbow`",
        compound: "Gathering a bouquet of colorful flowers",
        price: "18$",
        stock: 15,
        photo: "https://klike.net/uploads/posts/2019-12/1575709043_29.jpg",
      },
      {
        id: "10",
        title: "Bouquet `My Sunshine`",
        compound: "21 chrysanthemums",
        price: "32$",
        stock: 66,
        photo: "https://klike.net/uploads/posts/2019-12/1575709062_32.jpg",
      },
      {
        id: "11",
        title: "Bouquet `Comfortable and beautiful`",
        compound: "For those who love pots",
        price: "30$",
        stock: 7,
        photo: "https://klike.net/uploads/posts/2019-12/1575709073_35.jpg",
      },
      {
        id: "12",
        title: "Bouquet `Comfortable and beautiful 2`",
        compound: "For those who love pots",
        price: "30$",
        stock: 16,
        photo: "https://klike.net/uploads/posts/2022-08/1661271364_a-5.jpg",
      },
      {
        id: "13",
        title: "Bouquet `I love you`",
        compound: "21 roses",
        price: "45$",
        stock: 774,
        photo: "https://klike.net/uploads/posts/2022-08/1661271390_a-32.jpg",
      },
      {
        id: "14",
        title: "Bouquet `Always up to date`",
        compound: "21 roses",
        price: "45$",
        stock: 335,
        photo: "https://klike.net/uploads/posts/2022-08/1661271395_a-35.jpg",
      },
      {
        id: "15",
        title: "Bouquet `I don't know what to give`",
        compound: "15 tulips",
        price: "18$",
        stock: 541,
        photo: "https://klike.net/uploads/posts/2022-08/1661271419_a-137.jpg",
      },
    ]
};