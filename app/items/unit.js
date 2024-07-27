const {db} = require('../db.js');
const moment = require('moment');

function manageUnit(req, res){
    const time = moment().format('YYYY-MM-DD HH:mm:ss');

    switch(req.body.act){
        case "save":
            db.query('INSERT INTO unit SET ?', {
                uid:req.body.uid,
                unit_nm:req.body.unit_nm,
                stat:"A",
                created_at:time,
            }, (err, results, fields) => {
             if (err) {
               console.error('Error inserting item: ', err.stack);
               return;
             }
             res.send({msg:"unit Added Successfully",result:"OK"});
            });
            break;

        case "updt":
            res.send('Updating unit....');
            break;

        case "del":
            db.query(`update item set stat="D"  where unit_id='${req.body.unit_id}' AND uid=${req.body.uid}`,{},(err, results, fields)=>{
                console.log(results);
            })
            res.send({msg:"Record deleted successfully...!", result:"OK"})
            break;

        case "getall":
            db.query(`select * from unit where stat='A' AND uid=${req.body.uid} order by unit_id desc`,{},(err, results, fields)=>{
                res.send({data:results})
            });
            break;
    }

}
// Export the function to make it accessible from outside this module
module.exports = {manageUnit};