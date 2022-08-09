<script>

</script>

<div class="container">
    <div class="image"></div>
    <div class="text">
      <h2>
        Your experts for everything IT
      </h2>
      <div class="line"></div>
    </div>
  </div>

  <style>
    .container {
      margin-top: 30px;
      padding: 0;
      height: 40rem
    }
    .image {
      background-image: url('./it.jpg');
      background-attachment: fixed;
      filter: blur(3px);
      width: 100%;
      height: 40rem;
    }
    .text {
      position: absolute;
      z-index: 2;
      height: 40rem;
      transform: translateY(-40rem);
      width: 60rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-direction: column;
    }
    .text h2 {
      background-color: #00000088;
      padding: 1rem;
      margin: 0;
      text-align: center;
      font-size: 2rem;
    }

    .line {
        background: red;
        align-self: flex-start;
        height: 2px;
        width: 100%;
        margin: 0;
        animation: line 2s ease-out;
    }
    @keyframes line {
        0% {
            width: 0%
        } 
        50% {
            width: 0%
        }
        100% {
            width: 100%
        }
    }
  </style>