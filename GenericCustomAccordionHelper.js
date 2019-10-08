({
	toggleCollapseHandler : function(component, event) {
        var container = component.find("contContainer") ;
        var defaultCollapsed = component.get("v.isContsExpanded");
        
        if(defaultCollapsed){
         	component.set("v.isContsExpanded", false);
            $A.util.toggleClass(container, 'hide');
        }else{
            	component.set("v.isContsExpanded", true);
            $A.util.toggleClass(container, 'hide');
            
        }
    }
})
