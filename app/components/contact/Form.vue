<template>
  <div class="col-span-12 lg:col-span-7">
    <div
      class="flex items-baseline justify-between border-b border-border pb-4"
    >
      <h2 class="font-display text-3xl leading-none">Send a message</h2>
      <span
        class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        Form / 01
      </span>
    </div>

    <form class="mt-8 space-y-7" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div class="space-y-2">
          <Label
            for="name"
            class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Name *
          </Label>
          <UiInput
            id="name"
            v-model="name"
            v-bind="nameAtt"
            placeholder="Your name"
            class="h-11 rounded-none border-0 border-b border-border bg-transparent px-0 text-base focus-visible:border-brand dark:bg-transparent focus-visible:ring-0 md:text-sm"
          />
          <p v-if="errors.name" class="text-destructive text-xs">
            {{ errors.name }}
          </p>
        </div>

        <div class="space-y-2">
          <Label
            for="email"
            class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            Email *
          </Label>
          <UiInput
            id="email"
            v-model="email"
            v-bind="emailAtt"
            type="email"
            placeholder="your@email.com"
            class="h-11 rounded-none border-0 border-b border-border bg-transparent px-0 text-base focus-visible:border-brand dark:bg-transparent focus-visible:ring-0 md:text-sm"
          />
          <p v-if="errors.email" class="text-destructive text-xs">
            {{ errors.email }}
          </p>
        </div>
      </div>

      <div class="space-y-2">
        <Label
          for="subject"
          class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Subject *
        </Label>
        <UiInput
          id="subject"
          v-model="subject"
          v-bind="subjectAtt"
          placeholder="Project discussion, collaboration, etc."
          class="h-11 rounded-none border-0 border-b border-border bg-transparent px-0 text-base focus-visible:border-brand dark:bg-transparent focus-visible:ring-0 md:text-sm"
        />
        <p v-if="errors.subject" class="text-destructive text-xs">
          {{ errors.subject }}
        </p>
      </div>

      <div class="space-y-2">
        <Label
          for="message"
          class="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Message *
        </Label>
        <UiTextarea
          id="message"
          v-model="message"
          v-bind="messageAtt"
          rows="5"
          placeholder="Tell me about your project, ideas, or just say hello..."
          class="min-h-32 resize-none rounded-none border-0 border-b border-border bg-transparent px-0 text-base focus-visible:border-brand dark:bg-transparent focus-visible:ring-0 md:text-sm"
        />
        <p v-if="errors.message" class="text-destructive text-xs">
          {{ errors.message }}
        </p>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <UiButton
          type="submit"
          :disabled="isSubmitting"
          class="h-12 rounded-none px-8 font-mono text-[11px] uppercase tracking-[0.2em]"
          :variant="isSubmitting ? 'outline' : 'default'"
        >
          <span
            v-if="isSubmitting"
            class="flex items-center justify-center gap-2"
          >
            <Icon name="lucide:loader-2" size="16" class="animate-spin" />
            Sending
          </span>
          <span
            v-else-if="formResponse.success"
            class="flex items-center justify-center gap-2"
          >
            <Icon name="lucide:check" size="16" />
            Message sent
          </span>
          <span v-else class="flex items-center gap-2">
            Send message <span aria-hidden="true">→</span>
          </span>
        </UiButton>

        <p
          v-if="formResponse.success"
          class="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
        >
          Thanks — I'll get back to you soon.
        </p>
        <p
          v-else-if="formResponse.error"
          class="font-mono text-[10px] uppercase tracking-[0.16em] text-destructive"
        >
          {{ formResponse.error }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from '@vorms/core';
import z from 'zod';
import { Label } from '~/components/ui/label';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const isSubmitting = ref(false);
const formResponse = ref<{ success: boolean; error: string | null }>({
  success: false,
  error: null,
});

const { validateForm, register, errors, resetForm, handleSubmit } = useForm({
  initialValues: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  validate: useZodValidator(contactSchema),
  onSubmit: async () => {
    isSubmitting.value = true;
    formResponse.value = { success: false, error: null };

    const validationErrors = await validateForm();
    if (Object.keys(validationErrors).length > 0) {
      isSubmitting.value = false;
      return;
    }

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
      });

      formResponse.value = { success: true, error: null };
      resetForm();

      setTimeout(() => {
        formResponse.value = { success: false, error: null };
      }, 5000);
    } catch (error) {
      const failure = error as { data?: { message?: string } };
      formResponse.value = {
        success: false,
        error:
          failure.data?.message || 'Failed to send message. Please try again.',
      };
    } finally {
      isSubmitting.value = false;
    }
  },
});

const { value: name, attrs: nameAtt } = register('name');
const { value: email, attrs: emailAtt } = register('email');
const { value: subject, attrs: subjectAtt } = register('subject');
const { value: message, attrs: messageAtt } = register('message');
</script>
