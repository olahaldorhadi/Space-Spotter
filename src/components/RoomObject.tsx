export type RoomObject = {
    key: number;
    name: string;
    size: string;
    bookable: string;
    type: string;
    buildingname: string;
    areaname: string;
    favorite: boolean; // Added, remove if anything doesn't work
};

export type RoomManagerProps = {
    rooms: RoomObject[];
};