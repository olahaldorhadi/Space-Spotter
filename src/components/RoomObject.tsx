export type RoomObject = {
    key: number;
    name: string;
    size: string;
    bookable: string;
    type: string;
    buildingname: string;
    areaname: string;
};

export type RoomManagerProps = {
    rooms: RoomObject[];
};