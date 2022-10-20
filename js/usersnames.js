usernameLabel = Class.create(Label, {
    initialize: function(x, y){
        enchant.Label.call(this, "username");
        this.x = x;
        this.y = y;
    }
});