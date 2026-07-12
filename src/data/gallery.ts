export interface GalleryImage {
	src: string;
	alt: string;
	caption: string;
}

const featured: GalleryImage[] = [
	{ src:'/gallery/0f7948ee-12d4-4430-9573-6bce816217e0.webp', alt:'Gyermek öleli a lovat a foglalkozás közben', caption:'Bizalom, ami lépésről lépésre születik' },
	{ src:'/gallery/314741e0-b9a9-40f1-b673-15c7ca53c4fd.webp', alt:'Fiatal nő bárányokkal a lovasudvarban', caption:'Tanyasi barátaink közelében' },
	{ src:'/gallery/121e6b0c-e385-4ef9-8da6-753672b4def0.webp', alt:'Legelésző ló közelről', caption:'Nyugodt pillanatok a legelőn' },
	{ src:'/gallery/4999ae9c-6d55-4fe7-82ce-67ed8c19cb83.webp', alt:'Gyermek képességfejlesztő gyakorlatot végez lovon', caption:'Játékos mozgásfejlesztés' },
	{ src:'/gallery/a12462e2-ee37-4920-aae4-989844099f03.webp', alt:'Szamár a naplementében', caption:'A lovasudvar kíváncsi lakói' },
	{ src:'/gallery/6867abaa-ce1b-47fb-afbb-caf3b2e58aaf.webp', alt:'Fekete ló közelről a mezőn', caption:'Ismerd meg lovainkat' },
	{ src:'/gallery/7fd261b4-6ef4-4172-b18b-41a7a7b03dd3.webp', alt:'Gyerekek ápolnak egy lovat felnőtt segítségével', caption:'Az ismerkedés az ápolással kezdődik' },
	{ src:'/gallery/e621605b-0a56-4d6c-be44-9023866be2c2.webp', alt:'Kisfiú kobakban szamáron ül', caption:'Első élmények, nagy mosolyok' },
];

const remainingNames = [
	'09e06ca9-d0f7-4b3e-8c9c-c8e4322e78b1','0b31fa7a-b283-466b-b77e-0df935aafb83','1b5da92e-2e16-42d4-b0f0-98c8184f1f32','1f090c7c-81cd-4739-8745-70c342a5adca','2415ecd1-fd6c-457e-a6fe-5766ee3d1765','269f59d3-4c15-4351-8d48-69f8a14670b1','2dce31b7-5f19-49b4-9037-0ce8666e2e8c','310ff5f6-5d7e-44fa-9bf9-af519980f1d2','3d804c2c-a334-432e-b162-5840771a37a7','4b3f8fb5-aafb-4580-8fa3-1ff05423d6fc','4ee63322-a2d8-4dc7-a8fb-607df0cbefd1','58cfa8ef-d3ac-4716-989b-d6f7433d7029','59270a24-2a1b-4703-906c-200f134758d5','5c2f23e1-7869-44d4-885b-7a6d1078232b','67293205-a335-4c2e-8299-d6a1a3ed7328','6a79a2b6-9c24-4ec7-a5dc-ae9ed78c2383','6b7fdc35-5e60-4904-9064-38f106265c55','74becb51-a899-42b7-bbf7-bb4e5d7a4553','74e0fdb7-780a-430f-8d80-38d5ba86a81a','77bff52c-15a3-47cf-ade4-75556f2a8989','7aebdbc9-c6ae-4c3a-86a3-f6ce76cba6a0','7d8c321c-ae00-43a5-b6b6-ce327a94bcba','840b8b6f-c7a0-4a10-9b77-78d666997587','9c655991-6329-4ed4-85c5-142bdc456955','9fdab69a-efff-4540-8b1e-eb2636655c89','a0670a32-94b5-456a-ac62-527e2843b296','ab0b276a-66e9-462f-bab5-4362f17d382c','bd843b24-4701-4484-9af6-7c3f3f9a4af8','bf6b92d3-7258-4bf1-a044-1284b08f7bcd','bf8ab68c-f070-45c5-8cda-c4dac54d78ed','c54b751e-8936-4085-81fc-e48facad102a','cb94ae16-fae4-40de-887d-d416cea63713','defa8570-7ccc-4827-810e-c3929ef8e6de','fe435113-0ded-4de9-81e5-c2ee8d8946e1','ff66e121-d577-4e59-8541-bd80a3c6ea76',
];

const remaining = remainingNames.map((name, index): GalleryImage => ({
	src: `/gallery/${name}.webp`,
	alt: `Lovasudvari életkép Káptalantótiban ${index + 9}`,
	caption: 'Egy pillanat a ZsM Lovasudvar mindennapjaiból',
}));

export const galleryImages = [...featured, ...remaining];
