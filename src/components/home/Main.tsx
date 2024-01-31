import { BlockTitle, Button, Fab, List, ListItem } from 'konsta/react'
import { FcNext, FcSpeaker } from 'react-icons/fc'
import {RiAddFill} from "react-icons/ri"
import {FaStar} from "react-icons/fa"

function Main() {
  return (
    <main>
        {/* plus button fixed */}
        <Fab className="fixed bg-primary rounded-full right-4-safe bottom-24-safe z-40"
        icon={<RiAddFill className="text-white"/>}/>

        {/* Block title main */}
        <BlockTitle>
            Yangi so'zlar{" "}
            <Button inline tonal small>
                Mashq qilish
            </Button>
        </BlockTitle>

        {/* Main List words */}
        <List strong outline dividersMaterial className='pb-12'>
            <ListItem 
            media={<FcSpeaker onClick={(e: any)=> {
                e.stopPropagation();
            }} className='w-6 h-6'/>}
            onClick={()=> console.log("Hello")}
            header="Name"
            title="John Doe"
            after={
                <div className='flex items-center'>
                    <FaStar className="text-yellow-400 text-xl"/>
                    <FcNext/>
                </div>
            }/>
            <ListItem 
            media={<FcSpeaker onClick={(e: any)=> {
                e.stopPropagation();
            }} className='w-6 h-6' />}
            onClick={()=> console.log("Hello")}
            header="Name"
            title="John Doe"
            after={
                <div className='flex items-center'>
                    <FaStar className="text-yellow-400 text-xl"/>
                    <FcNext/>
                </div>
            }/>
        </List>
    </main>
  )
}

export default Main