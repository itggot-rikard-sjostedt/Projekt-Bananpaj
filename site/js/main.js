function hideShow(ref)
{
    var img_id = ref.id.substring(4, ref.id.length);
    var img_element = document.querySelector('#'+img_id)
    img_element.classList.toggle("gone");
}
