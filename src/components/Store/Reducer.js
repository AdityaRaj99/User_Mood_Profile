

const initial={role:"empty",userName:""}

export const  Reducer=(state=initial,action)=>{

    switch (action.type){

        case 'admin':
            
            return {...state,role:action.type,userName:action.payload}

        default:

            return {...state,role:action.type,userName:action.payload}

    }

}