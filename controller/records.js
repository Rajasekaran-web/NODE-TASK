const data=require('../records.json')
const axios=require('axios')


const Records= (req,res)=>{
    const id = data.map(x=>x.id)
    const open = data.filter(x=>x.disposition=='open')
    const close=data.filter(x=>x.disposition=='closed').length
    const output= {id:id,open:open,close:close}
    res.json(output)
}
const Managed_records=async(req,res)=>{
    var config = {
        method: 'get',
        url: 'http://localhost:3000/api/records'
      };
      
     await axios(config)
      .then(function (response) {
       res.json(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.json(error)
      });
}


module.exports={Records,
        Managed_records}    