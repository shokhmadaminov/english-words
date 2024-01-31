import { Icon } from 'konsta/react'
import {GiRank1} from "react-icons/gi"

function Rank() {
  return (
    <div>
      <Icon material={<GiRank1 style={{color: "#005bc1", fontSize: 25}}></GiRank1>}
      badgeColors={{bg:  "bg-green-600"}}
      badge={0}
      ></Icon>
    </div>
  )
}

export default Rank