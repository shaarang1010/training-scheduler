export type Color = 'red' | 'green' | 'blue' | 'orange' | 'yellow' | 'none';


export const getColor = (color: Color) =>{
    switch(color){
        case 'blue':
            return 'blue-400';
        case 'green':
            return 'green-300';
        case 'orange':
            return 'orange-300';
        case 'red':
            return 'red-400';
        case 'yellow':
            return 'yellow-300';
        default:
            return 'white'
    }
} 