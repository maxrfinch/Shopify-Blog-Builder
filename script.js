let currentSelected;

const setCookie = (cname,cvalue,exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("cookie is set", cname, cvalue)
}

const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const checkCookie = () => {
  var code=getCookie("code");
  if (code != "") {
    console.log('previous save, load that save');
    $('.main__layout-content')[0].outerHTML = code;
  } else {
     console.log('starting from scratch');
  }
}

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const isDelete = (element, item) => {
  const width = element.target.offsetWidth;
  const x = element.pageX - $(item).offset().left;
  const y = element.pageY - $(item).offset().top;

  if(x < width && x > (width - 30)) {
    return true;
  }
  return false;
}

const addEl = element => {
  console.log(element);
  const parent = $('.main__layout-content')[0];
  let newEl = "";
  switch (element) {
    case 1:
    newEl = `
    <div class="twelve bottompad element">
      <!-- Plain Paragraph W/ Header -->
      <h2>Edit This Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ut.</p>
    </div>
    `;
      break;
    case 2:
    newEl = `
    <div class="twelve bottompad element">
      <!-- Plain Paragraph W/ Header & CTA -->
      <h2>Edit This Header</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, ut.</p>
      <a href="#" class="btn" title="Enter a title">Call To Action &rarr;</a>
    </div>
    `;
      break;
    case 3:
    newEl = `
    <div class="twelve bottompad element flex">
      <!-- Paragraph W/ Image -->
      <div class="eight left">
        <h2>Edit This Header</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse rem excepturi at ut. Quia dolor praesentium vel tempore qui maiores, blanditiis quaerat error aliquid laborum quod voluptatibus, temporibus obcaecati quidem sapiente quisquam est dolorem ullam totam. Perferendis, sunt perspiciatis animi.</p>
      </div>
      <div class="three right">
        <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
      </div>
    </div>
    `;
      break;
    case 4:
    newEl = `
    <div class="twelve bottompad element flex">
      <!-- Paragraph W/ Image & CTA -->
      <div class="eight left">
        <h2>Edit This Header</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse rem excepturi at ut. Quia dolor praesentium vel tempore qui maiores, blanditiis quaerat error aliquid laborum quod voluptatibus, temporibus obcaecati quidem sapiente quisquam est dolorem ullam totam. Perferendis, sunt perspiciatis animi.</p>
        <a href="#" class="btn" title="Enter a title">Call To Action &rarr;</a>
      </div>
      <div class="three right">
        <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
      </div>
    </div>
    `;
      break;
      case 5:
      newEl = `
      <div class="twelve bottompad element flex">
        <!-- 5 Images -->
        <div class="two">
          <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
        </div>
        <div class="two">
          <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
        </div>
        <div class="two">
          <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
        </div>
        <div class="two">
          <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
        </div>
        <div class="two">
          <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
        </div>
      </div>
      `;
        break;
        case 6:
        newEl = `
        <div class="twelve bottompad element flex">
          <!-- 5 Images -->
          <div class="three">
            <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
          </div>
          <div class="three">
            <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
          </div>
          <div class="three">
            <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
          </div>
          <div class="three">
            <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
          </div>
        </div>
        `;
          break;
          case 7:
          newEl = `
          <div class="twelve bottompad element flex">
            <!-- 5 Images -->
            <div class="four">
              <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
            </div>
            <div class="four">
              <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
            </div>
            <div class="four">
              <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
            </div>
          </div>
          `;
            break;
            case 8:
            newEl = `
            <div class="twelve bottompad element flex">
              <!-- 5 Images -->
              <div class="six">
                <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
              </div>
              <div class="six">
                <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
              </div>
            </div>
            `;
              break;
              case 9:
              newEl = `
              <div class="twelve bottompad element flex">
                <!-- 5 Images -->
                <div class="twelve">
                  <img src="https://cdn.shopify.com/s/files/1/0645/1401/files/Wellness_700x.png" alt="">
                </div>
              </div>
              `;
                break;
                case 10:
                newEl = `

                `;
                  break;
    default:
    console.log('error');
    break;
  }
  parent.innerHTML = parent.innerHTML + newEl;
  const code = $('.main__layout-content')[0].outerHTML.replace(/"/g, `'`).split('\n').join('');
  setCookie("code", code, 10);

  $("#elements").css('display', 'none');
}


const copy = () => {
  copyToClipboard($('.main__layout-content')[0].outerHTML.replace('element', ''));
}

$('.main').on('click', '.element',function(e){
  console.log('Delete Element? ', isDelete(e,this));
  currentSelected = e.target;
  if(!isDelete(e,this)) {
    if(e.target.tagName == "IMG") {
      e.target.parentNode.innerHTML = prompt('Enter Image Code Here').replace('//', 'https://').replace('https:https://', 'https://');
    } else if (['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'a','p'].includes(e.target.localName)) {
      if(e.target.localName == 'a') {
        e.target.innerText = prompt('Enter Call To Action Text') + " →";
      } else {
        e.target.innerText = prompt('Enter Heading Text Here');
      }
    }
  } else {
    e.target.remove();
  }
  const code = $('.main__layout-content')[0].outerHTML.replace(/"/g, `'`).split('\n').join('');
  setCookie("code", code, 10);
});
