import Ember from 'ember';

export function cutOff(params/*, hash*/) {
  var content = params[0];
  if (content.length > 450){
    content = content.substring(0, 450) + "  [...]";
  }
  return content;
}

export default Ember.Helper.helper(cutOff);
