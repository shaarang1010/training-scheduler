export type Color = 'red' | 'green' | 'blue' | 'orange' | 'yellow' | 'none';


export const getColor = (color: Color) =>{
    switch(color){
        case 'blue':
            return 'bg-blue-400';
        case 'green':
            return 'bg-green-300';
        case 'orange':
            return 'bg-orange-300';
        case 'red':
            return 'bg-red-400';
        case 'yellow':
            return 'bg-yellow-300';
        default:
            return 'bg-slate-50'
    }
} 