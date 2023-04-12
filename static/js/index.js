var DOMUtil = {
	getElementsByClassName:function(className,context,tagName){ //根据class获取节点
        if(typeof context == 'string'){
            tagName = context;
            context = document;
        }else{
            context = context || document;
            tagName = tagName || '*';
        }
        if(context.getElementsByClassName){
            return context.getElementsByClassName(className);
        }
        var nodes = context.getElementsByTagName(tagName);
        var results= [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var classNames = node.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    results.push(node);
                    break;
                }
            }
        }
        return results;
    }
};
