var redClaro = (video,music,shop,drive) => {
    return [
        {
            href: 'https://www.clarovideo.com',
            name: 'Claro video',
            available: video
        },
        {
            href: 'https://www.claromusica.com',
            name: 'Claro música',
            available: music
        },
        {
            href: 'https://www.claroshop.com',
            name: 'Claro shop',
            available: shop
        },
        {
            href: '#',
            name: 'Claro Drive',
            available: drive
        }
    ]
}




export default class elinks {
    //TODO: List of available elinks for countries.
    static getElinksByCountry = (country) => {
        return (country === 'mexico') ? redClaro(true,true,true,true) : redClaro(true,true,false,true);
    }
}