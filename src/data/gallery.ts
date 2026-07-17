export interface GalleryImage {
	src: string;
	alt: string;
	caption: string;
}

const featured: GalleryImage[] = [
	{ src: '/gallery/0f7948ee-12d4-4430-9573-6bce816217e0.webp', alt: 'Gyermek háton fekvő fejlesztő gyakorlatot végez egy vezetett lovon', caption: 'Bizalom, ami lépésről lépésre születik' },
	{ src: '/gallery/314741e0-b9a9-40f1-b673-15c7ca53c4fd.webp', alt: 'Fiatal nő fehér gidát tart az ölében a lovasudvarban', caption: 'Tanyasi barátaink közelében' },
	{ src: '/gallery/121e6b0c-e385-4ef9-8da6-753672b4def0.webp', alt: 'Barna ló füvet legel a réten közelről', caption: 'Nyugodt pillanatok a legelőn' },
	{ src: '/gallery/4999ae9c-6d55-4fe7-82ce-67ed8c19cb83.webp', alt: 'Gyermek háton fekvő mozgásfejlesztő gyakorlatot végez lovon segítő mellett', caption: 'Játékos mozgásfejlesztés' },
	{ src: '/gallery/a12462e2-ee37-4920-aae4-989844099f03.webp', alt: 'Szamár közeledik a földúton naplementében', caption: 'A lovasudvar kíváncsi lakói' },
	{ src: '/gallery/6867abaa-ce1b-47fb-afbb-caf3b2e58aaf.webp', alt: 'Fekete ló áll a zöld legelőn kék ég alatt', caption: 'Ismerd meg lovainkat' },
	{ src: '/gallery/7fd261b4-6ef4-4172-b18b-41a7a7b03dd3.webp', alt: 'Kislányok simogatnak egy barna lovat felnőttek segítségével', caption: 'Az ismerkedés az ápolással kezdődik' },
	{ src: '/gallery/85085d5d-f36c-4bdb-b493-dd6a78b3eb62.webp', alt: 'Kislány kobakban ül egy barna ló hátán', caption: 'Első élmények, nagy mosolyok' },
];

const remainingImages = [
	{ name: '09e06ca9-d0f7-4b3e-8c9c-c8e4322e78b1', alt: 'Fekete-fehér és fehér nyúl pihen egymás mellett a szénában' },
	{ name: '0b31fa7a-b283-466b-b77e-0df935aafb83', alt: 'Kobakos gyermek lovagol egy barna lovon a zöld réten, hátulról nézve' },
	{ name: '1f090c7c-81cd-4739-8745-70c342a5adca', alt: 'Lovasok haladnak a Káli-medence lankái között lóhátról nézve' },
	{ name: '2415ecd1-fd6c-457e-a6fe-5766ee3d1765', alt: 'Oklevelet tartó nő áll egy felkantározott pej ló mellett' },
	{ name: '269f59d3-4c15-4351-8d48-69f8a14670b1', alt: 'Két sötét szőrű ló legel egymás mellett a lovasudvarban' },
	{ name: '2dce31b7-5f19-49b4-9037-0ce8666e2e8c', alt: 'Gyermek fekszik egy barna ló hátán mozgásfejlesztő foglalkozás közben' },
	{ name: '310ff5f6-5d7e-44fa-9bf9-af519980f1d2', alt: 'Segítő vezeti a felnyergelt lovat a napsütötte karámban' },
	{ name: '3d804c2c-a334-432e-b162-5840771a37a7', alt: 'Gyermek átölel egy barna lovat a karámban' },
	{ name: '4b3f8fb5-aafb-4580-8fa3-1ff05423d6fc', alt: 'Kobakos fiatal nő készít közös képet egy szamárral' },
	{ name: '4ee63322-a2d8-4dc7-a8fb-607df0cbefd1', alt: 'Férfi egy fából épült karám falát javítja' },
	{ name: '58cfa8ef-d3ac-4716-989b-d6f7433d7029', alt: 'Kobakos gyermek ül egy pej lovon, amelyet egy segítő vezet' },
	{ name: '59270a24-2a1b-4703-906c-200f134758d5', alt: 'Két fekete kiscica áll egymás mellett az istálló előtt' },
	{ name: '5c2f23e1-7869-44d4-885b-7a6d1078232b', alt: 'Szürke szamár legel a magas fűben' },
	{ name: '67293205-a335-4c2e-8299-d6a1a3ed7328', alt: 'Gyerekek nyulakat simogatnak a szénával bélelt ólban' },
	{ name: '6a79a2b6-9c24-4ec7-a5dc-ae9ed78c2383', alt: 'Tarka nyulak pihennek együtt a friss szénában' },
	{ name: '6b7fdc35-5e60-4904-9064-38f106265c55', alt: 'Fekete-fehér és világosbarna nyúl ül egymás mellett a szénán' },
	{ name: '74becb51-a899-42b7-bbf7-bb4e5d7a4553', alt: 'Fehér bárány néz ki a fából készült karám lécei között' },
	{ name: '74e0fdb7-780a-430f-8d80-38d5ba86a81a', alt: 'Lemenő nap világítja meg a Káli-medence mezőit' },
	{ name: '77bff52c-15a3-47cf-ade4-75556f2a8989', alt: 'Fiatal nő ül egy felnyergelt szamár hátán a legelőn' },
	{ name: '7aebdbc9-c6ae-4c3a-86a3-f6ce76cba6a0', alt: 'Tágas füves karám és állattartó épületek a lovasudvarban' },
	{ name: '7d8c321c-ae00-43a5-b6b6-ce327a94bcba', alt: 'Barna-fehér tehén pihen szalmán a nyitott istállóban' },
	{ name: '840b8b6f-c7a0-4a10-9b77-78d666997587', alt: 'Szürke szamár és barna ló áll egymás mellett a magas fűben' },
	{ name: '9c655991-6329-4ed4-85c5-142bdc456955', alt: 'Nő áll egy felnyergelt szamár mellett a lovasudvarban' },
	{ name: '9fdab69a-efff-4540-8b1e-eb2636655c89', alt: 'Kislány nyúl egy pej ló felé felnőtt segítő mellett' },
	{ name: 'a0670a32-94b5-456a-ac62-527e2843b296', alt: 'Fekete-fehér kiscica ül egy faasztalon a lovasudvarban' },
	{ name: 'ab0b276a-66e9-462f-bab5-4362f17d382c', alt: 'Legelésző barna ló feje és sörénye közelről' },
	{ name: 'bf6b92d3-7258-4bf1-a044-1284b08f7bcd', alt: 'Kobakos kislány ül egy barna lovon, amelyet egy segítő tart' },
	{ name: 'bf8ab68c-f070-45c5-8cda-c4dac54d78ed', alt: 'Kobakos gyermek ül egy pej lovon a füves karámban' },
	{ name: 'c54b751e-8936-4085-81fc-e48facad102a', alt: 'Kobakos gyermek lovagol egy vezetett pej lovon' },
	{ name: 'cb94ae16-fae4-40de-887d-d416cea63713', alt: 'Szürke szamár füvet legel közelről a napsütötte réten' },
	{ name: 'defa8570-7ccc-4827-810e-c3929ef8e6de', alt: 'Fekete-fehér kiscicák pihennek egy nyitott táskában a fűben' },
	{ name: 'fe435113-0ded-4de9-81e5-c2ee8d8946e1', alt: 'Kobakos gyermek lovagol a füves pályán segítő kíséretében' },
	{ name: 'ff66e121-d577-4e59-8541-bd80a3c6ea76', alt: 'Barna ló és fekete-fehér macska találkozik az istálló gerendájánál' },
	{ name: '18898a52-a9b0-47f4-8490-96a702e924f0', alt: 'Világosbarna tehén áll közel a kamerához a karámban' },
	{ name: '81d8cd78-162d-4b10-b62a-5a36ae506ad8', alt: 'Világosbarna tehén pihen a szalmán kék ég alatt' },
	{ name: 'd4b6bbbe-6c51-4bcc-9b44-045eed13f339', alt: 'Mosolygó nő készít közös képet egy pihenő tehénnel' },
	{ name: 'c19a6f53-539f-4347-88a6-541174137943', alt: 'Fiatal barna borjú néz közelről a kamerába' },
	{ name: '03489ea8-d125-4cdf-84fa-b894ab52e487', alt: 'Barna borjú pihen a szalmán szénabálák mellett' },
	{ name: '84d69e1d-5876-4b1e-9d34-421ae6ab93f1', alt: 'Feldíszített szarvú barna-fehér tehén áll a karámban' },
	{ name: 'e451f5cb-7f83-4fd7-a436-3744a321f1e8', alt: 'Világos sapkát viselő fekete ló áll közel a kamerához' },
];

const remaining = remainingImages.map(({ name, alt }): GalleryImage => ({
	src: `/gallery/${name}.webp`,
	alt,
	caption: 'Egy pillanat a ZsM Lovasudvar mindennapjaiból',
}));

export const galleryImages = [...featured, ...remaining];
