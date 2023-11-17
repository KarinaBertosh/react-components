import saveAs from "file-saver";

export interface IPhoto {
    alt_description: string,
    blur_hash: string,
    breadcrumbs: Array<any>,
    color: string,
    created_at: string,
    current_user_collections: Array<any>,
    description: string,
    height: number,
    id: string,
    liked_by_user: boolean,
    likes: number,
    links: { self: string, html: string, download: string, download_location: string; },
    promoted_at: null,
    slug: string,
    sponsorship: any,
    topic_submissions: object,
    updated_at: string,
    urls: { raw: string, full: string, regular: string, small: string; },
    user: { id: string, updated_at: string, username: string, name: string, first_name: string; },
    width: number;
};

export interface IPhotosProps {
    photos: IPhoto[],
}

export const routes = {
    defaultPage: "/",
    aboutPage: "about",
    formPage: "form"
};

export const forms = {
    reg: 'reg',
    logIn: 'logIn'
};


export const downloadPhoto = (url: string) => {
    saveAs(url, `${url}.png`);
};

export const sendPhotoToFavorite = (url: string, email: string) => {
    const photos = localStorage.getItem(email) || JSON.stringify([]);

    if (photos) {
        const newData = JSON.parse(photos);
        const existedUrl = newData.find((e: string ) => e === url);
        if (!existedUrl) newData.push(url);
        localStorage[email] = JSON.stringify(newData);
    }
};
