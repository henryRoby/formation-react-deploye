const INITIAL_STATE = {
    articles:[]
}

function articleReducer(state = INITIAL_STATE , action ) {
    switch (action.type) {
        case 'ADDARTICLE':
            const newArr = [...state.articles];
            newArr.unshift(action.payload)
            console.log("tableau vaovao",newArr);
            return {
                ...state,
                articles:newArr
            }

        case 'LOADARTICLES':
            return {
                ...state,
                articles: action.payload   
        }
    }
    return state 
}
export default articleReducer;


/// on dispatch no données ici 
 export  const getArticles=()=>dispatch=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(data => {
        dispatch({
            type:'LOADARTICLES',
            payload:data
        })
        //  console.log(data);
    })
}