<template>
  <div class="FAQ">
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q1") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a1") }}</p>
    </details>
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q2") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a2") }}</p>
    </details>
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q3") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a3") }}</p>
    </details>
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q4") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a4") }}</p>
    </details>
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q5") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a5") }}</p>
    </details>
    <details class="FAQ__content">
      <summary class="FAQ__content__question">{{ $t("faq.q6") }}</summary>
      <p class="FAQ__content__answer">{{ $t("faq.a6") }}</p>
    </details>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.FAQ {
  width: 97%;
  height: fit-content;
  padding: 0.5rem;
  border: 0.65rem dashed var(--darkest-of-the-dark);
  background: var(--main-bg-color);

  &__content {
    &__question {
      padding: 0.5rem;
      background-color: var(--darkest-of-the-dark);
      color: var(--main-text-color);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.1s;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: var(--third-bg-color);
        color: var(--main-text-color);
      }
    }

    &[open] > &__question {
      background-color: var(--third-bg-color);
      color: var(--main-text-color);
    }

    &__answer {
      margin: 0;
      padding: 0.5rem 1.5rem;
      background: var(--darkest-of-the-dark);
      color: var(--main-text-color);
    }
  }
}

@media only screen and (min-width: 768px) {
  .FAQ {
    width: 70%;
  }
}

@media only screen and (min-width: 1024px) {
  .FAQ {
    border: 1rem dashed var(--darkest-of-the-dark);
    width: 50%;
  }
}
</style>
