<script>
  // Get references to the input and the heading
  const inputBox = document.getElementById("evaluatedText");
  const countDisplay = document.getElementById("letterCount");

  // Add an event listener to update count when the user types
  inputBox.addEventListener("input", function () {
    const textLength = inputBox.value.length;
    countDisplay.textContent = textLength;
  });
</script>
