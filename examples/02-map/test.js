describe('simplifiedPhotographs', function () {

  it('is an array', function () {
    assert(Array.isArray(simplifiedPhotographs));
  });

  it('constains objects with only caption and url properties', function () {
    simplifiedPhotographs.forEach(function (photograph) {
      assert.deepEqual(Object.keys(photograph), ['caption', 'url']);
    });
  });

  it('contains object with the correct caption', function () {
    simplifiedPhotographs.forEach(function (photograph, index) {
      assert.equal(photograph.caption, photographs[index].caption.text);
    });
  });

  it('contains object with the correct url', function () {
    simplifiedPhotographs.forEach(function (photograph, index) {
      assert.equal(photograph.url, photographs[index].images.low_resolution.url);
    });
  });

});

describe('photographElements', function () {

  it('is an array', function () {
    assert(Array.isArray(photographElements));
  });

  it('contains an array of DOM nodes', function () {
    photographElements.forEach(function (element) {
      assert.ok(element instanceof Node);
    });
  });

  it('contains elements with the correct alt attribute', function () {
    photographElements.forEach(function (element, index) {
      assert.equal(element.alt, photographs[index].caption.text);
    });
  });

  it('contains elements with the correct src attribute', function () {
    photographElements.forEach(function (element, index) {
      assert.equal(element.src, photographs[index].images.low_resolution.url);
    });
  });

});
