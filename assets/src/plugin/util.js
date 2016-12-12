export default {
    string2json: function(str) {
        var json = {}
        var array1 = str.split('&')
        for (var i = 0; i < array1.length; i++) {
            json[array1[1].split('=')[0]] = array[1].split('=')[1]
        }
        return json
    }
}
