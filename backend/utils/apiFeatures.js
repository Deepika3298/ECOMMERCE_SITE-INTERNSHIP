class ApiFeatures{
    constructor(query,queryStr){
        this.query= query;
        this.queryStr= queryStr;
    }
    search(){
        const keyword= this.queryStr.keyword ? {
            name:{
                $regex: this.queryStr.keyword,
                $options:"i"
            }
        } : {} ;

        this.query= this.query.find({...keyword})
        return this;
    }

    filter(){
        const copyQuery= {...this.queryStr}

        //Remove some fields for category
        const removeFields=["keyword","page","limit"];
        removeFields.forEach((key)=>delete copyQuery[key]);

        //Filter for price and rating
        let queryString= JSON.stringify(copyQuery);
        queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, (key)=>`$${key}`);

        this.query= this.query.find(JSON.parse(queryString));
        return this;
    }
    
    pagination(resultPerPage){
        const currentpage= Number(this.queryStr.page) || 1;

        const skip= resultPerPage * (currentpage-1);

        this.query= this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports= ApiFeatures;