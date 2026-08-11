
export class NetworkError extends Error{
    constructor(message:string = 'Error Fetching'){
        super(message);
        this.name = 'NetworkError';
    }
}

export class DataError extends Error{
    constructor(message:string = 'Error Fetching Data'){
        super(message);
        this.name = 'DataError';
    }
}


export const fetchProductCatalog = (): Promise<{id:number, name:string, price:number}[]> =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() < 0.8){
                resolve([
                    {id:1, name:'Laptop', price:1200},
                    {id:2, name:'headphones', price:200},
                ]);
            }else{
                reject(new DataError('Failed to fetch data'));
            }
        }, 1000);
    });
};

export const fetchProductReviews = (productId:number): Promise<{reviews:string}[]> =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() < 0.5){
                resolve([
                    {reviews:'Product is good'},
                    {reviews:'Product is not good'},
                ]);
            }else{
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};

export const fetchSalesReport = (): Promise<{totalSales:number,unitsSold:number,averagePrice:number }[]> =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (Math.random() < 0.5 ){
                resolve([
                    {totalSales:1000, unitsSold:100, averagePrice:500},
                    {totalSales:1500, unitsSold:150, averagePrice:550 },
                ]);
            }else{
                reject(new DataError('Failed to fetch sales report'));
            }
        }, 1000);
    });
};



//Chaining 