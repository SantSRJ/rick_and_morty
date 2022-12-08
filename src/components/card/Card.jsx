import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { agregarFavorito, removerFavorito } from '../../redux/actions.js';

function Card(props) {
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach(fav => {
         if(fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   function handleFavorite() {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   return (
      <div>
        <div>
          {isFav ?(
            <button onClick={handleFavorite}>❤️</button>
            ):(
            <button onClick={handleFavorite}>🤍</button>
            )}
           <button onClick={props.onClose}>X</button>
         </div>
           <Link to={`/detail/${props.id}`}>
           <h2>{props.name}</h2>
           </Link>
           <h2>{props.species}</h2>
           <h2>{props.gender}</h2>
           <img  src={props.image} alt= {props.name} />
      </div>
   );
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   };
}

function mapDispatchToProps(dispatch) {
   return {
      addFav: personaje => dispatch(agregarFavorito(personaje)),
      removeFav: id => dispatch(removerFavorito(id))
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);