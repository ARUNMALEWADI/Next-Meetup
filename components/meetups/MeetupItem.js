// import Card from '../ui/Card';
// import classes from './MeetupItem.module.css';
// import {useRouter} from 'next/router'
// import Link from 'next/link';

// function MeetupItem(props) {
//   const router=useRouter()

//   function ShowMeetupHandler(){
//   router.push('/'+props.id)
//   }
//   return (
//     <li className={classes.item}>
//       <Card>
//         <div className={classes.image}>
//           <img src={props.image} alt={props.title} />
//         </div>
//         <div className={classes.content}>
//           <h3>{props.title}</h3>
//           <address>{props.address}</address>
//         </div>
//         <div className={classes.actions}>
//           <Link href="/M">hum</Link>
//           <button onClick={ShowMeetupHandler}>Show Details</button>
//         </div>
//       </Card>
//     </li>
//   );
// }

// export default MeetupItem;


import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  // console.log(props.id);
  const router = useRouter();

  const showDetailsdHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsdHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;