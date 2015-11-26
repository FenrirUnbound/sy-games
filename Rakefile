
def execute(command)
  puts "Running '#{command}'"
  value = %x( #{command} )
  puts value
end

task :deploy, [:verbose] do |t, args|
  command = 'appcfg.py -A sy-games update .'

  if args.verbose
    puts 'Enabling verbosity'
    command += ' -v'
  end

  execute(command)

end

task :local do |t|
  execute('dev_appserver.py .')
end

task :clean do |t|
  execute('find . -name "*.pyc" -exec rm -rf {} \;')
end
