<script setup>
    import EditorButtons from './EditorButtons'

    import {useEditor, EditorContent} from '@tiptap/vue-3';
    import StarterKit from '@tiptap/starter-kit';
    import {defineProps, defineEmits} from 'vue';

    const props = defineProps({
        modelValue: String
    });

    const emit = defineEmits(['update:modelValue']);

    const editor = useEditor({
        content: props.modelValue,
        editable: true,
        injectCSS: false,
        extensions: [
            StarterKit,
        ],
        onUpdate: ({editor}) => {
            const html = editor.getHTML();
            emit('update:modelValue', html);
        }
    });
</script>

<template>
    <template v-if="editor !== undefined">
        <editor-buttons :editor="editor" />
        <editor-content :editor="editor"/>
    </template>
</template>

<style lang="scss">
    .ProseMirror {
        padding: 3.5rem;
        margin-top: .5rem;
        min-height: 400px;
        border: 1px solid var(--black);

        font-weight: 300;

        > * + * {
            margin-top: 0.75em;
        }

        ul,
        ol {
            padding: 0 2rem;

            & > li{
                list-style-type: disc;

                ul > li{
                    list-style-type: circle;

                    ul > li{
                        list-style-type: square;
                    }
                }
            }
        }

        h1, h2, h3, h4, h5, h6{
            margin-bottom: 1.2em;
            font-weight: 300;
        }

        p{
            font-size: 1.6rem;
        }

        code {
            background-color: rgba(#616161, 0.1);
            color: #616161;
        }

        pre {
            background: #0D0D0D;
            color: #FFF;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;

            code {
                color: inherit;
                padding: 0;
                background: none;
                font-size: 0.8rem;
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }

        blockquote {
            padding-left: 1rem;
            border-left: 2px solid rgba(#0D0D0D, 0.1);
        }

        hr {
            border: none;
            border-top: 2px solid rgba(#0D0D0D, 0.1);
            margin: 2rem 0;
        }
    }
</style>
