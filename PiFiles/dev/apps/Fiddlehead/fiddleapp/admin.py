from django.contrib import admin
from .models import SynthPreset, Note, Sequence, Song

admin.site.register(SynthPreset)
admin.site.register(Note)
admin.site.register(Sequence)
admin.site.register(Song)
