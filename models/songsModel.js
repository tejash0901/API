const mongoose=require("mongoose")

const songsSchema=mongoose.Schema(
    {
        "name":{
            type:String,
            required: [true,"please enter a song name"]
        },
        "artist":{
            type: String,
            required:[true,"please enter artist name"]
        },
        "genre":{
            type:String,
            required:true,
        },
        "image":{
            type:String,
            required:true,
        }
    },
    {
        // timeStamps:true
        timestamps:{createdAt:"created_at",updatedAt:"updated_at"}
    }

)

const Songs = mongoose.model('Songs',songsSchema)

module.exports=Songs