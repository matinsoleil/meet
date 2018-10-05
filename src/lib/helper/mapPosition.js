export default class MapPosition {
    static getMapURL(lat,lon,zoom){
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=600x300&markers=color:red%7C${lat},${lon}&key=AIzaSyBDivPmiHuim6y8tVwvtjOwPqcYJYzZ9xg`;
    }
}