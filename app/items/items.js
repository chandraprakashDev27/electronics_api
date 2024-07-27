const {db} = require('../db.js');
const moment = require('moment');
function manageItems(req, res){

    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    switch(req.body.act){
        case "save":
            db.query('INSERT INTO item SET ?', {
                uid:req.body.uid,
                item_nm:req.body.item_nm,
                dealer_nm:req.body.dealer_nm,
                dealer_id:req.body.dealer_id,
                unit_nm:req.body.unit_nm,
                unit_id:req.body.unit_id,
                hsn_code:req.body.hsn_code,
                quantity:req.body.quantity,
                dealer_price:req.body.dealer_price,
                selling_price:req.body.selling_price,
                stat:"A",
                created_at:time,
            }, (err, results, fields) => {
             if (err) {
               console.error('Error inserting item: ', err.stack);
               return;
             }
             res.send({msg:"Item Added Successfully",result:"OK"});
            });
            break;

        case "updt":
            res.send('Updating item....');
            break;

        case "del":
            db.query(`update item set stat="D"  where itemid='${req.body.itemid}' AND uid=${req.body.uid}`,{},(err, results, fields)=>{
                console.log(results);
            })
            res.send({msg:"Record deleted successfully...!", result:"OK"})
            break;

        case "getall":
            db.query(`select * from item where stat='A' AND uid=${req.body.uid} order by itemid desc`,{},(err, results, fields)=>{
                res.send({data:results})
            });
            break;
    }

}


// Export the function to make it accessible from outside this module
module.exports = {manageItems};