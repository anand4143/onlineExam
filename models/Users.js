'use strict';

module.exports = (sequelize, Datatype)=>{
    return sequelize.define('user',{
        id : {
            type : Datatype.UUID,
            primaryKey : true
        },
        first_name : {
            type : Datatype.STRING,
            isAlphanumeric :true,
            required : true,
            allowNull : true
        },
        last_name : {
            type : Datatype.STRING,
            required : true,
            allowNull : true
        },
        username : {
            type : Datatype.STRING,
            required : true,
            allowNull : true,
            len: [8,12]
        },
        password : {
            type : Datatype.STRING,
            required : true,
            allowNull : true,
            len : [8,20]
        },
        email : {
            type : Datatype.STRING,
            required : true,
            allowNull : true,
            len : [7,100],
            isEmail : true
        },
        updated_at : {
            type : Datatype.DATE
        },
        deleted_at : {
            type : Datatype.DATE
        }
    
    },{
        underscored : true,
        paranoid : true
    });
}