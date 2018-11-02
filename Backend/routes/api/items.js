const express = require('express');
const router = express.Router();

const Item = require('../../Item');

// @route GET api/items

router.get('/', (req, res) => {

    Item.find()
        .then(items => res.json(items))
})

router.post('/', (req, res) => {

    const newItem = new Item({
        quantity1: req.body.quantity1,
        quantity2: req.body.quantity2,
        quantity3: req.body.quantity3,
        quantity4: req.body.quantity4,
        quantity5: req.body.quantity5,
        quantity6: req.body.quantity6,
        quantity7: req.body.quantity7,
        quantity8: req.body.quantity8,
        quantity9: req.body.quantity9,
        quantity10: req.body.quantity10,
        quantity11: req.body.quantity11,
        quantity12: req.body.quantity12,
        quantity13: req.body.quantity13,
        quantity14: req.body.quantity14,
        quantity15: req.body.quantity15,
        quantity16: req.body.quantity16,
        quantity17: req.body.quantity17,
        quantity18: req.body.quantity18,
        quantity19: req.body.quantity19
    });

    newItem.save().then(item => res.json(item));
});

/*router.put('/comments/:commentId', (req, res) => {
    const { commentId } = req.params;
    if (!commentId) {
        return res.json({ success: false, error: 'No comment id provided' });
    }
    Comment.findById(commentId, (error, comment) => {
        if (error) return res.json({ success: false, error });
        const { author, text } = req.body;
        if (author) comment.author = author;
        if (text) comment.text = text;
        comment.save(error => {
            if (error) return res.json({ success: false, error });
            return res.json({ success: true });
        });
    });
});*/



module.exports = router;