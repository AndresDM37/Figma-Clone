import Image from "next/image";

const Avatar = ({ name, otherStyles } : { name: string; otherStyles : string}) => {
    return(
        <div className={`relative h-9 w-9 rounded-full ${otherStyles}`}>
            <Image 
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
                alt="avatar"
                fill
                className="rounded-full"
            />
        </div>
    )
}

export default Avatar;