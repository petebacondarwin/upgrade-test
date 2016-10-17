export var PropertyBinding = (function () {
    function PropertyBinding(binding) {
        this.binding = binding;
        this.parseBinding();
    }
    PropertyBinding.prototype.parseBinding = function () {
        var parts = this.binding.split(':');
        this.prop = parts[0].trim();
        this.attr = (parts[1] || this.prop).trim();
        this.bracketAttr = "[" + this.attr + "]";
        this.parenAttr = "(" + this.attr + ")";
        this.bracketParenAttr = "[(" + this.attr + ")]";
        var capitalAttr = this.attr.charAt(0).toUpperCase() + this.attr.substr(1);
        this.onAttr = "on" + capitalAttr;
        this.bindAttr = "bind" + capitalAttr;
        this.bindonAttr = "bindon" + capitalAttr;
    };
    return PropertyBinding;
}());
//# sourceMappingURL=component_info.js.map