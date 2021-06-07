import Image from "next/image";
import HeaderItem from "./HeaderItems"

import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"




export default function Header() {
    return (
        <div className="flex flex-col sm:flex-row m-4 justify-between items-center h-auto">
        
            <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem Title="HOME" Icon={HomeIcon}/>
            <HeaderItem Title="TRENDING" Icon={LightningBoltIcon}/>
            <HeaderItem Title="VERIFIED" Icon={BadgeCheckIcon}/>
            <HeaderItem Title="COLLECTIONS" Icon={CollectionIcon}/>
            <HeaderItem Title="SEARCH" Icon={SearchIcon}/>
            <HeaderItem Title="ACCOUNT" Icon={UserIcon}/>                    
            </div>
            
        <Image className="object-contain" src="https://links.papareact.com/ua6" width={100} height={100}></Image>
        </div>
    )
}
