export default function HeaderItems({Title,Icon}) {
    return (
        <div className="flex-col items-center cursor-pointer w-12 flex sm:w-20 hover:text-white group">
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <p className="group-hover:opacity-100  tracking-widest opacity-0 ">{Title}</p>
        </div>
    )
}
